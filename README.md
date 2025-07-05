# AntiGemini
If you find that Google's automatic AI overview during searches is misleading or annoying, this extension is for you. AntiGemini blocks the Google AI Overview from loading by automatically appending your Google search with the "-gemini" flag, which tells Google to not load an AI Overview.  
As of Version 1, this is accomplished by reloading your page, but in future iterations the appending of the "-gemini" flag will happen upon the submission of your search.

## How to Install the Extension
1. First, clone this repository: `git clone https://github.com/adarshm11/AntiGemini`  
2. Ensure all dependencies are set up correctly: `cd anti-gemini && npm install`  
3. Then, run the extension build: `npm run build`
4. Finally, open `chrome://extensions`, turn on Developer Mode, click "Load Unpacked", and select the `build` folder in this project.
