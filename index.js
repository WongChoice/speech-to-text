console.log("test");
const deepspeech = require('deepspeech');
const fs = require('fs');
const path = require('path'); // Add this line for path manipulation

const modelPath = 'models\\deepspeech-0.9.3-models.pbmm'; // Use double backslashes for Windows
const model = new deepspeech.Model(modelPath);
model.enableExternalScorer(modelPath.replace('.pbmm', '.scorer'));

const audioFilePath = 'audio\\female.wav'; // Use double backslashes for Windows
const audioBuffer = fs.readFileSync(path.join(__dirname, audioFilePath)); // Use path.join for correct path resolution

const result = model.stt(audioBuffer);
console.log('Speech to Text:', result);
