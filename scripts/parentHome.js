function viewConformation()
{
    let newWindow = open('/', 'example', 'width=300,height=300')
    newWindow.focus();
    
    newWindow.onload = function() {
      let html = `<div style="font-size:30px">Welcome!</div>`;
      newWindow.document.body.insertAdjacentHTML('afterbegin', html);
    };
}