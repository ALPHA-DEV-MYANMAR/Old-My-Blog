// Blog P
let p = document.getElementById("p");
let p_one = document.getElementById("p_one");
let p_two = document.getElementById("p_two");
let p_three = document.getElementById("p_three");
let p_four = document.getElementById("p_four");
let p_five = document.getElementById("p_five");
let p_six = document.getElementById("p_six");
let p_seven = document.getElementById("p_seven");
let p_eight = document.getElementById("p_eight");
let p_nine = document.getElementById("p_nine");

// Blog Modal
let blog_btn = document.getElementById('blog_btn');
let blog_btn_one = document.getElementById('blog_btn_one');
let blog_btn_two = document.getElementById('blog_btn_two');
let blog_btn_three = document.getElementById('blog_btn_three');
let blog_btn_four = document.getElementById('blog_btn_four');
let blog_btn_five = document.getElementById('blog_btn_five');
let blog_btn_six = document.getElementById('blog_btn_six');
let blog_btn_seven = document.getElementById('blog_btn_seven');
let blog_btn_eight = document.getElementById('blog_btn_eight');
let blog_btn_nine = document.getElementById('blog_btn_nine');
let custom_modal = document.getElementById('custom_modal');

let birthday_text = data[0].body;
let uin_text = data[1].body;
let live_text = data[2].body;
let job_text = data[3].body;
let study_text = data[4].body;
let twice_text = data[5].body;
let tzuyu_text = data[6].body;
let dream_text = data[7].body;
let partner_text = data[8].body;
let friend_text = data[9].body;

//paragraph text
p.innerHTML = `${birthday_text.substr(1,100)}`;
p_one.innerHTML = ` ${uin_text.substr(1,100)}`;
p_two.innerHTML = `${live_text.substr(1,100)}`;
p_three.innerHTML = `${job_text.substr(1,100)}`;
p_four.innerHTML = `${study_text.substr(1,100)}`;
p_five.innerHTML = `${twice_text.substr(1,100)}`;
p_six.innerHTML = `${tzuyu_text.substr(1,100)}`;
p_seven.innerHTML = `${dream_text.substr(1,100)}`;
p_eight.innerHTML = `${partner_text.substr(1,100)}`;
p_nine.innerHTML = `${friend_text.substr(1,100)}`;

//Show Modal
blog_btn.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Where did I Born?","Birthday","img/blog/thantlang.jpg",
        birthday_text
    );
});

blog_btn_one.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("What is my Education?","Education","img/blog/westuni.jpg",
        uin_text
    );
});

blog_btn_two.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Where did I live?","Live In","img/blog/yangon.jpg",
        live_text
    );
});

blog_btn_three.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("What is my Job","My Job","img/blog/max.jpg",
        job_text
    );
});

blog_btn_four.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("What I was study","Studying","img/blog/webdev.png",
        study_text
    );
});

blog_btn_five.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("No Twice.No life","Faviate Idols","img/blog/twice.jpg",
        twice_text
    );
});

blog_btn_six.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Who is My Queen?","Faviate Single Idol","img/blog/tzuyu.jpg",
        tzuyu_text
    );
});

blog_btn_seven.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("What is my Dream","Dream","img/blog/dream.jpg",
        dream_text
    );
});

blog_btn_eight.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Whose is my partner","My partner","img/blog/partner.jpg",
        partner_text
    );
});

blog_btn_nine.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Who is my friend?","My friend","img/blog/friend.jpg",
        friend_text
    );
});

//Show Modal
function show_modal(title,cate,img,content){
custom_modal.innerHTML= `
    <div class="row animate__animated animate__backInDown p-3 p-md-0 p-lg-0">
    <div class="col-12 col-md-12 col-lg-10 mx-auto">
        <div class="h3 skill-text fw-bolder d-flex justify-content-between ">
            <div class="mt-3">
                ${title} 
            </div>
            <div class="mt-3">
                <button type="button" class="btn-close" onclick="closemodal()"></button>
            </div>
        </div>
        <div class=" d-flex justify-content-center align-items-center flex-column ">
            <div>
                <img src="${img}" class=" rounded blog_detail_img" style=" width:500px" alt="">
            </div>
            <div>
                <div>
                    <span class=" bold-font h4">${cate}</span>
                </div>
                <div class=" mt-2">
                    ${content}
                </div>
            </div>
        <div> 
        </div>
        </div>

    </div>
    </div>
    `;
}

//Close Modal
function closemodal(){
    custom_modal.classList.remove('custom-modal');
    custom_modal.innerHTML = "";
}
