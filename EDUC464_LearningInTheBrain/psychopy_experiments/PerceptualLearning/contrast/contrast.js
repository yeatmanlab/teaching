/***************** 
 * Contrast *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'contrast';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



const trials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials2LoopBegin(trials2LoopScheduler));
flowScheduler.add(trials2LoopScheduler);
flowScheduler.add(trials2LoopEnd);



flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'staircaseTemplate1.xlsx', 'path': 'staircaseTemplate1.xlsx'},
    {'name': 'staircaseTemplate2.xlsx', 'path': 'staircaseTemplate2.xlsx'},
    {'name': 'https://lib.pavlovia.org/vendors/jsQUEST.min.js', 'path': 'https://lib.pavlovia.org/vendors/jsQUEST.min.js'},
    {'name': 'https://lib.pavlovia.org/vendors/jsQUEST.min.js', 'path': 'https://lib.pavlovia.org/vendors/jsQUEST.min.js'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instructions1;
var key_resp;
var fixation_circle_intro;
var updateLocationClock;
var trialClock;
var grating;
var resp;
var fixation_circle;
var trialnewClock;
var grating_2;
var resp_2;
var fixation_circle_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instructions1',
    text: 'KEEP YOUR EYES ON THE FIXATION DOT.\nTRY NOT TO MOVE YOU EYES\nIS THE GRATING ON THE LEFT OR RIGHT?\nUSE ARROWS\nIT WILL GET VERY DIFFICULT AND IT’S OKAY TO GUESS IF YOU DON’T KNOW\nIT’S OKAY TO TAKE A QUICK BREAK TO REST YOUR EYES IF YOU NEED TO',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'bottom-center',
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixation_circle_intro = new visual.Polygon({
    win: psychoJS.window, name: 'fixation_circle_intro', 
    edges: 100, size:[0.01, 0.01],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "updateLocation"
  updateLocationClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  grating = new visual.GratingStim({
    win : psychoJS.window,
    name : 'grating', units : undefined, 
    tex : 'sin', mask : 'gauss',
    ori : 0, pos : [0, 0],
    anchor : 'center',
    sf : 1, phase : 0.5,
    size : [0.2, 0.2],
    color : new util.Color([0.5, 0.5, 0.5]), opacity : 1.0,
    contrast : 1.0, blendmode : 'avg',
    texRes : 512, interpolate : true, depth : 0.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixation_circle = new visual.Polygon({
    win: psychoJS.window, name: 'fixation_circle', 
    edges: 100, size:[0.01, 0.01],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "trialnew"
  trialnewClock = new util.Clock();
  grating_2 = new visual.GratingStim({
    win : psychoJS.window,
    name : 'grating_2', units : undefined, 
    tex : 'sin', mask : 'gauss',
    ori : 90, pos : [0, 0],
    anchor : 'center',
    sf : 1, phase : 0.5,
    size : [0.2, 0.2],
    color : new util.Color([0.5, 0.5, 0.5]), opacity : 1.0,
    contrast : 1.0, blendmode : 'avg',
    texRes : 512, interpolate : true, depth : 0.0 
  });
  resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixation_circle_2 = new visual.Polygon({
    win: psychoJS.window, name: 'fixation_circle_2', 
    edges: 100, size:[0.01, 0.01],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions1);
    instructionsComponents.push(key_resp);
    instructionsComponents.push(fixation_circle_intro);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions1* updates
    if (t >= 0.0 && instructions1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions1.tStart = t;  // (not accounting for frame time here)
      instructions1.frameNStart = frameN;  // exact frame index
      
      instructions1.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixation_circle_intro* updates
    if (t >= 0.1 && fixation_circle_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_circle_intro.tStart = t;  // (not accounting for frame time here)
      fixation_circle_intro.frameNStart = frameN;  // exact frame index
      
      fixation_circle_intro.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialsConditions;
var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    // setup a MultiStairTrialHandler
    trialsConditions = TrialHandler.importConditions(psychoJS.serverManager, 'staircaseTemplate1.xlsx');
    trials = new data.MultiStairHandler({stairType:MultiStairHandler.StaircaseType.QUEST, 
      psychoJS: psychoJS,
      name: 'trials',
      varName: 'intensity',
      nTrials: 50.0,
      conditions: trialsConditions,
      method: TrialHandler.Method.RANDOM
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    // Schedule all the trials in the trialList:
    for (const thisQuestLoop of trials) {
      trialsLoopScheduler.add(trialsLoopBeginIteration(snapshot));
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(updateLocationRoutineBegin(snapshot));
      trialsLoopScheduler.add(updateLocationRoutineEachFrame());
      trialsLoopScheduler.add(updateLocationRoutineEnd());
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
    // then iterate over this loop (trials)
    trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var level;
function trialsLoopBeginIteration(snapshot) {
  return async function() {
    // ------Prepare for next entry------
    level = trials.intensity;

    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials2Conditions;
var trials2;
function trials2LoopBegin(trials2LoopScheduler, snapshot) {
  return async function() {
    // setup a MultiStairTrialHandler
    trials2Conditions = TrialHandler.importConditions(psychoJS.serverManager, 'staircaseTemplate2.xlsx');
    trials2 = new data.MultiStairHandler({stairType:MultiStairHandler.StaircaseType.QUEST, 
      psychoJS: psychoJS,
      name: 'trials2',
      varName: 'intensity',
      nTrials: 50.0,
      conditions: trials2Conditions,
      method: TrialHandler.Method.RANDOM
    });
    psychoJS.experiment.addLoop(trials2); // add the loop to the experiment
    currentLoop = trials2;  // we're now the current loop
    // Schedule all the trials in the trialList:
    for (const thisQuestLoop of trials2) {
      trials2LoopScheduler.add(trials2LoopBeginIteration(snapshot));
      snapshot = trials2.getSnapshot();
      trials2LoopScheduler.add(importConditions(snapshot));
      trials2LoopScheduler.add(updateLocationRoutineBegin(snapshot));
      trials2LoopScheduler.add(updateLocationRoutineEachFrame());
      trials2LoopScheduler.add(updateLocationRoutineEnd());
      snapshot = trials2.getSnapshot();
      trials2LoopScheduler.add(importConditions(snapshot));
      trials2LoopScheduler.add(trialnewRoutineBegin(snapshot));
      trials2LoopScheduler.add(trialnewRoutineEachFrame());
      trials2LoopScheduler.add(trialnewRoutineEnd());
    // then iterate over this loop (trials2)
    trials2LoopScheduler.add(trials2LoopEndIteration(trials2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


function trials2LoopBeginIteration(snapshot) {
  return async function() {
    // ------Prepare for next entry------
    level = trials2.intensity;

    return Scheduler.Event.NEXT;
  }
}


async function trials2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var tiltSide;
var correctAns;
var stimLoc;
var updateLocationComponents;
function updateLocationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'updateLocation' ---
    t = 0;
    updateLocationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('updateLocation.started', globalClock.getTime());
    // Run 'Begin Routine' code from location
    if ((Math.random() > 0.5)) {
        tiltSide = (- 1);
        stimLoc = [- 0.25, 0];
        correctAns = "left";
    } else {
        tiltSide = 1;
        correctAns = "right";
        stimLoc = [0.25, 0];
    }
    
    // keep track of which components have finished
    updateLocationComponents = [];
    
    for (const thisComponent of updateLocationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function updateLocationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'updateLocation' ---
    // get current time
    t = updateLocationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of updateLocationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function updateLocationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'updateLocation' ---
    for (const thisComponent of updateLocationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('updateLocation.stopped', globalClock.getTime());
    // the Routine "updateLocation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    grating.setOpacity(level);
    grating.setPos(stimLoc);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(grating);
    trialComponents.push(resp);
    trialComponents.push(fixation_circle);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grating* updates
    if (t >= 0.5 && grating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grating.tStart = t;  // (not accounting for frame time here)
      grating.frameNStart = frameN;  // exact frame index
      
      grating.setAutoDraw(true);
    }
    
    if (grating.status === PsychoJS.Status.STARTED && frameN >= (grating.frameNStart + 7)) {
      grating.setAutoDraw(false);
    }
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // was this correct?
        if (resp.keys == correctAns) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixation_circle* updates
    if (t >= 0.1 && fixation_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_circle.tStart = t;  // (not accounting for frame time here)
      fixation_circle.frameNStart = frameN;  // exact frame index
      
      fixation_circle.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var lastLevel;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        routineTimer.reset();
        }
    
    resp.stop();
    // Run 'End Routine' code from GetLastLevel
    lastLevel = level;
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_2_allKeys;
var trialnewComponents;
function trialnewRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trialnew' ---
    t = 0;
    trialnewClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trialnew.started', globalClock.getTime());
    grating_2.setOpacity(level);
    grating_2.setPos(stimLoc);
    resp_2.keys = undefined;
    resp_2.rt = undefined;
    _resp_2_allKeys = [];
    // keep track of which components have finished
    trialnewComponents = [];
    trialnewComponents.push(grating_2);
    trialnewComponents.push(resp_2);
    trialnewComponents.push(fixation_circle_2);
    
    for (const thisComponent of trialnewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialnewRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialnew' ---
    // get current time
    t = trialnewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grating_2* updates
    if (t >= 0.5 && grating_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grating_2.tStart = t;  // (not accounting for frame time here)
      grating_2.frameNStart = frameN;  // exact frame index
      
      grating_2.setAutoDraw(true);
    }
    
    if (grating_2.status === PsychoJS.Status.STARTED && frameN >= (grating_2.frameNStart + 7)) {
      grating_2.setAutoDraw(false);
    }
    
    // *resp_2* updates
    if (t >= 0.0 && resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2.tStart = t;  // (not accounting for frame time here)
      resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_2.clearEvents(); });
    }
    
    if (resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_2_allKeys = _resp_2_allKeys.concat(theseKeys);
      if (_resp_2_allKeys.length > 0) {
        resp_2.keys = _resp_2_allKeys[_resp_2_allKeys.length - 1].name;  // just the last key pressed
        resp_2.rt = _resp_2_allKeys[_resp_2_allKeys.length - 1].rt;
        resp_2.duration = _resp_2_allKeys[_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (resp_2.keys == correctAns) {
            resp_2.corr = 1;
        } else {
            resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixation_circle_2* updates
    if (t >= 0.1 && fixation_circle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_circle_2.tStart = t;  // (not accounting for frame time here)
      fixation_circle_2.frameNStart = frameN;  // exact frame index
      
      fixation_circle_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialnewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialnewRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trialnew' ---
    for (const thisComponent of trialnewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trialnew.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp_2.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         resp_2.corr = 1;  // correct non-response
      } else {
         resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_2.corr, level);
    }
    psychoJS.experiment.addData('resp_2.keys', resp_2.keys);
    psychoJS.experiment.addData('resp_2.corr', resp_2.corr);
    if (typeof resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_2.rt', resp_2.rt);
        psychoJS.experiment.addData('resp_2.duration', resp_2.duration);
        routineTimer.reset();
        }
    
    resp_2.stop();
    // the Routine "trialnew" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
