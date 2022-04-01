# FinChatBot Hackathon

This repo holds an altered version of the 1st for Women website. This new version includes an interactive chatbot experience meant to help new customers who want to find out more about the importance of car insurance.
The website runs on Node.js and is integrated with the IBM Watson API to drive the chatbot experience.

This project was done for the FinChatBot Hackathon hosted by FinChatBot in association with IBM back in 2019. I entered with a team of classmates from university, and we finished 4th place in the competittion.

Since this was a time-restricted hackathon, a lot of the code is uncommented and undocumented. 

## Launch Instructions 

### Pre-requisites 
You'll need to have Node.js and NPM installed. For installation instructions, please visit: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. 

You'll also need the .env file for this project which holds the API-specific configs for this project. Please contact me privately if you're interested in running this locally.

### Running Locally

- Clone the repo to a local directory
- Paste the .env file in the base folder
- Open your terminal in the base folder and install all dependencies using the following cli command: 
`npm install`
- Run the application by executing the following cli command: 
`node index.js`  
- Visit the homepage of the website by visiting http://localhost:3000/

### Naviating the website
- Scroll down to "Car Insurance for Newbies". This is a new secion that we added during the hackathon that's not part of the original 1st for Women website (https://www.firstforwomen.co.za/)
![image](https://user-images.githubusercontent.com/41521247/161212632-f16859b3-b4e9-471a-9455-fec526570d95.png)
- Click "Play Now" 
- Follow the interactive chatbot prompts that appear in the top right-hand part of the screen:
![image](https://user-images.githubusercontent.com/41521247/161212397-8ba65fc8-e82c-47ba-89fe-687e2cbdc8b1.png)
 **Please note:** This feautre might not work depedending on the project's connection to IBM Watson. If you have issues connecting, please contact me privately.
