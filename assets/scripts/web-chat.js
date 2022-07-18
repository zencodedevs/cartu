window.addEventListener('load', () => {
    setWebChatConfig();
    setWebChatScript();

    console.log('Chat Config: ', spartezSupportChat);
});

function setWebChatConfig() {
    let spartezSupportChat = {
        portal: 2,
        cloud: {
            jiraId: 'da0b2c55-ffbc-35fa-ba2a-035a2936200d',
            jiraUrl: 'https://altcomge.atlassian.net',
            urls: {
                rest: 'https://chat-api.spartez-software.com',
                ws: 'https://chat-ws.spartez-software.com'
            }
        },
        iconClass: 'web-chat-button',
        chatClass: 'web-chat-box'
        //meta: [ // optional, custom metadata to store in the issue created from conversation.
        //    { render: true, name: "Value Name 1", value: val1 }, // "render" values will be displayed in the chat dashboard
        //    { render: false, name: "Value Name 2", value: val2 },
        //],
        // delay: 100, // delay between page load and chat load in milliseconds
        // container: 'spartez-support-chat-container', // ID of the page element that will be replaced by chat
        // locale: 'en-us' // force a specified locale for displaying texts to the user
        // instead of detecting it from the browser
    };

    window.spartezSupportChat = spartezSupportChat;
}

function setWebChatScript() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://chat-api.spartez-software.com/chat.js';
    document.getElementsByTagName('body')[0].appendChild(script);
}