# Load dplyr and ggplot2 libraries
library(dplyr)
library(ggplot2)

## Load data
setwd('~/Research/Teaching/EDUC464_LearningInTheBrain/experiments/Motor_task/data')
# List files
data.files = Sys.glob('~/Research/Teaching/EDUC464_LearningInTheBrain/experiments/Motor_task/data/PARTICIPANT_Motor_task*.csv')
print(data.files)
# Load one file
df <- read.csv(data.files[1])
head(df)
# There are lots of unnecesary columns. Let's select just those we need
df <- select(df,finger,correctResp,key_resp.keys,key_resp.corr,key_resp.rt,complex_block_loop.thisRepN, new_block_loop.thisRepN)

# Loop over the other data files and read them all
for (ii in 2:length(data.files)){
  df2 <- read.csv(data.files[ii])
  df2 <- select(df2,finger,correctResp,key_resp.keys,key_resp.corr,key_resp.rt,complex_block_loop.thisRepN, new_block_loop.thisRepN)
  df <- rbind(df,df2)
}

# Compute mean RT for each finger
df.rt <- summarise(group_by(df,finger), m.rt = mean(key_resp.rt, na.rm=TRUE),
                sd.rt = sd(key_resp.rt, na.rm=TRUE), ntrial = n())
# Compute standard error
df.rt <- mutate(df.rt, se.rt = sd.rt/sqrt(ntrial))
# Re-order the categories to plot in order
df.rt$finger <- factor(df.rt$finger,levels = c('I','M','R','L'))
# Plot
ggplot(data=df.rt, aes(x=finger,y=m.rt, color=finger))+
  geom_bar(stat='identity')+
  geom_errorbar(aes(ymin=m.rt-se.rt, ymax=m.rt+se.rt), width=.2)

# The experiment was actually repeating blocks of a 10 trial sequence.
# Summarize RT by block
df.rt <- summarise(group_by(df, complex_block_loop.thisRepN), m.rt = mean(key_resp.rt, na.rm=TRUE),
                sd.rt = sd(key_resp.rt, na.rm=TRUE), ntrial = n())
# Compute standard error
df.rt <- mutate(df.rt, se.rt = sd.rt/sqrt(ntrial))
# Plot the data
ggplot(data=df.rt,aes(x=complex_block_loop.thisRepN,y=m.rt))+
  geom_line()+
  geom_point()
# Note zero based indexing in Python. Replot starting at block 1 rather than zero and add error bars
ggplot(data=df.rt,aes(x=complex_block_loop.thisRepN +1 ,y=m.rt))+
  geom_line()+
  geom_point()+
  geom_errorbar(aes(ymin=m.rt-se.rt, ymax=m.rt+se.rt), width=.2)

# New motor sequencce started after 20 blocks
df$new_block_loop.thisRepN <- df$new_block_loop.thisRepN+20 

# Creating a new variable for block number irrespective of block type
df$block <- rowSums(select(df,complex_block_loop.thisRepN, new_block_loop.thisRepN),na.rm = TRUE)


df.rt <- summarise(group_by(df,block),m.rt = mean(key_resp.rt, na.rm=TRUE),
                sd.rt = sd(key_resp.rt, na.rm=TRUE), ntrial = n())
# Compute standard error
df.rt <- mutate(df.rt, se.rt = sd.rt/sqrt(ntrial))

# Create categorical variable to denote repeated or random sequence
df.rt$seqtype <- factor(df.rt$block >=20, levels=c(FALSE,TRUE), labels=c('10sequence','10random'))

# Plot
ggplot(data=df.rt, aes(x=block+1, y=m.rt, color=seqtype))+
  geom_point()+
  geom_line()+
  geom_point()+
  geom_errorbar(aes(ymin=m.rt-se.rt, ymax=m.rt+se.rt), width=.2)

