new WOW().init();

VanillaCounter();

let project_content = document.getElementById('project_content');
let project_count = document.getElementById('project_count');

$.getJSON('https://raw.githubusercontent.com/ALPHA-DEV-MYANMAR/MY-BLOG/main/api/project.json',function(pdata,status){
    // Project data

    let limitdata = pdata.slice(Math.max(pdata.length - 6, 0))
    limitdata.forEach(el => {
        project_content.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card shadow mb-5 project-card">
                <div class="card-body text-center">
                    <figure class="card imghvr-blur">
                        <img src="${el.image}" height="250">
                        <figcaption>
                            <div
                                class=" d-flex flex-column justify-content-center align-content-center h-100">
                                <div class=" h5 skill-text fw-bolder text-dark">
                                    ${el.title}
                                </div>
                                <div class=" text-black-50 fw-bolder">
                                    ${el.body}
                                </div>
                                <div class=" mt-3">
                                    <button class=" button-62">
                                        seemore
                                    </button>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    `;
    });
    project_count.innerHTML = ` 
        ${pdata.length}
    `;

});


// Blog Date
let blog_date = document.getElementById('blog_date');
let date = new Date();
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let Month = month[date.getMonth()];
let Day = String(date.getDate()).padStart(2, '0');
let current_date = Day+'/'+Month+'/'+date.getFullYear();
blog_date.innerHTML = `
    ${current_date}
`;

// Blog P
let p = document.getElementById("p");
let p_one = document.getElementById("p_one");
let p_two = document.getElementById("p_two");
let p_three = document.getElementById("p_three");
let p_four = document.getElementById("p_four");
let p_five = document.getElementById("p_five");
let p_six = document.getElementById("p_six");
let p_seven = document.getElementById("p_seven");
// Blog Modal
let blog_btn = document.getElementById('blog_btn');
let blog_btn_one = document.getElementById('blog_btn_one');
let blog_btn_two = document.getElementById('blog_btn_two');
let blog_btn_three = document.getElementById('blog_btn_three');
let blog_btn_four = document.getElementById('blog_btn_four');
let blog_btn_five = document.getElementById('blog_btn_five');
let blog_btn_six = document.getElementById('blog_btn_six');
let blog_btn_seven = document.getElementById('blog_btn_seven');
let custom_modal = document.getElementById('custom_modal');
//paragraph
let birthday_text = "birthday";
let uin_text = "university";
let live_text = "live in ";
let job_text = "Job ";
let study_text = " study ";
let twice_text = " Twice ";
let tzuyu_text = " tzuyu" ;
let dream_text = "dream";
//paragraph text
p.innerHTML = `${birthday_text.substr(1,100)}`;
p_one.innerHTML = ` ${uin_text.substr(1,100)}`;
p_two.innerHTML = `${live_text.substr(1,100)}`;
p_three.innerHTML = `${job_text.substr(1,100)}`;
p_four.innerHTML = `${study_text.substr(1,100)}`;
p_five.innerHTML = `${twice_text.substr(1,100)}`;
p_six.innerHTML = `${tzuyu_text.substr(1,100)}`;
p_seven.innerHTML = `${dream_text.substr(1,100)}`;
//Show Modal
blog_btn.addEventListener("click",function(){
    custom_modal.classList = 'custom-modal';
    show_modal("Where did I Born?","5/March/2000","img/blog/thantlang.jpg",
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

//Show Modal
function show_modal(title,cate,img,content){
custom_modal.innerHTML= `
    <div class="row animate__animated animate__backInDown">
    <div class="col-12 col-md-12 col-lg-10 mx-auto">
        <div class="h3 skill-text fw-bolder d-flex justify-content-between">
            <div class="mt-3">
                ${title} 
            </div>
            <div class="mt-3">
                <button type="button" class="btn-close" onclick="closemodal()"></button>
            </div>
        </div>
        <div>
            <span class=" bold-font">${cate}</span>
        </div>
        <div>
            <img src="${img}"  width="50%" class="float-end" alt="">
        </div>
        <div>
            <p class="mt-3">
                ${content}
            </p>
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


