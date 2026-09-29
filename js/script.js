window.dataLayer = window.dataLayer || [];

document.querySelectorAll('[data-event]').forEach(function(el){
  el.addEventListener('click', function(e){
    if(el.tagName === 'A' && el.getAttribute('href') === '#') e.preventDefault();
    var payload = {
      event: el.dataset.event,
      campaign_name: 'rich-roll-2026',
      position: el.dataset.position || '',
      page_type: 'campaign'
    };
    window.dataLayer.push(payload);
    console.log('[GA/GTM demo]', payload);
  });
});
