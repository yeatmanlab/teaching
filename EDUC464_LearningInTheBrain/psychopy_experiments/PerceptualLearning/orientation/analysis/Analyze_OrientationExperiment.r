library('dplyr')
library('tidyr')
library('ggplot2')

# Working directory -- change this to match your file structure
setwd(dirname(rstudioapi::getSourceEditorContext()$path))
setwd('../data')

# load data
df <- read.csv('ear_test_orientation_2023-09-21_15h40.40.811.csv')
# Remove data rows associated with instructions (note the contrast experiment only has one set of instructions)
df <- filter(df, is.na(instructions.started))
df <- filter(df, is.na(Instructions2.started))
# Combine trials1 and trials 2 (note that I accidentally named it trials2 for contrast and trials_2 for orientation)
df$stimulus.intensity <- rowSums(select(df, trials.intensity, trials_2.intensity), na.rm = TRUE)
# Which block it came from
df$orientation <- factor(is.na(df$trials.thisTrialN), levels=c(FALSE, TRUE), labels=c('rightHemifield','leftHemifield'))
# df$orientation <- factor(is.na(df$trials.thisTrialN), levels=c(FALSE, TRUE), labels=c('vertical','horizontal'))
df$trials_2.thisTrialN <- df$trials_2.thisTrialN + max(df$trials.thisTrialN, na.rm=TRUE)
df$trials <- rowSums(select(df,trials.thisTrialN,trials_2.thisTrialN), na.rm = TRUE) +1 #I'm adding 1 because I don't like zero based indexing
# convert the responses into a correct/incorrect factor
df$response <- rowSums(select(df, trials.response, trials_2.response), na.rm = TRUE)
df$response <- factor(df$response, levels=c(0,1), labels=c('incorrect','correct'))
# Plot stimulus intensity
ggplot(df, aes(x=trials, y=stimulus.intensity, color=orientation))+
  geom_line(size=1.5)+geom_point(data=df,aes(color=response))+scale_y_continuous(trans='log10')

