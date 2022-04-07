var url = 'http://www.imgops.com/';
chrome.contextMenus.onClicked.addListener(function(info, tab){
    chrome.tabs.create({
    url: url + info.srcUrl,
    //
    index: tab.index + 1
    })
})
var onInitialize = function(){
	chrome.contextMenus.create({
        title: 'Search Image with ImgOps',
        contexts: ['image'],
        targetUrlPatterns: ['https://*/*', 'http://*/*'],
        id: 'contextMenu'
	});
};
chrome.runtime.onStartup.addListener(onInitialize);
chrome.runtime.onInstalled.addListener(onInitialize);