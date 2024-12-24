// engine.js
let currentScene = 'title_screen';
let visitedScenes = new Set();

function displayScene(sceneId) {
    const scene = storyScenes[sceneId];
    const titleElements = document.querySelectorAll('.title-screen');
    
    titleElements.forEach(element => {
        element.style.display = (sceneId === 'title_screen') ? 'block' : 'none';
    });
    
    const storyText = document.getElementById('story-text');
    storyText.style.display = (sceneId === 'title_screen') ? 'none' : 'block';
    
    // Handle paragraph breaks and italic text
    const formattedText = scene.text
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .split('\n\n')
        .map(para => `<p>${para}</p>`)
        .join('');
    
    storyText.innerHTML = formattedText;
    
    // Handle scene image
    const sceneImage = document.getElementById('scene-image');
    if (scene.image) {
        sceneImage.innerHTML = `<img src="${scene.image}" alt="Scene illustration">`;
        sceneImage.style.display = 'flex';
    } else {
        sceneImage.style.display = 'none';
    }
    
    updateChoices(scene.choices, sceneId);
}

function updateChoices(choices, sceneId) {
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = 'choice-btn';
        
        // Special styling for title screen and introduction buttons
        if (sceneId === 'title_screen') {
            button.className += ' start-btn';
        } else if (sceneId === 'introduction') {
            button.className += ' continue-btn';
        }
        
        button.onclick = () => {
            currentScene = choice.nextScene;
            displayScene(choice.nextScene);
        };
        choicesDiv.appendChild(button);
    });
}

// Start the story when the page loads
window.onload = function() {
    displayScene(currentScene);
};