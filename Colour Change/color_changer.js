const body=document.querySelector('body')
const bg_color=['red','green','blue','yellow','pink','purple'];

function changeColor(){
    let num =Math.random();
    console.log("random num", num);


    let len =bg_color.length;
    console.log("color list change",len);

    let index = num * len;
    console.log("multiply random number length"+ index);
    let int_index = parseInt(index);
    console.log("integer rounded",int_index);

    body.style.backgroundColor = bg_color[int_index];
}
const text_colors =['white','black','blue','red'];
function changeTextColor(){
    const text = document.getElementById('text');
    const color_index = parseInt(Math.random() * text_colors.length);
 text.style.color = text_colors[color_index];
}