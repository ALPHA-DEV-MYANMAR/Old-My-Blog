new WOW().init();

feather.replace();

VanillaCounter();

let project_content = document.getElementById('project_content');
let project_count = document.getElementById('project_count');

$.getJSON('https://raw.githubusercontent.com/ALPHA-DEV-MYANMAR/MY-BLOG/main/api/project.js',function(pdata,status){
    // Project data
    let limitdata = pdata.slice(Math.max(pdata.length - 6, 0))
    limitdata.forEach(el => {
        project_content.innerHTML += `
        <div class="col-12 col-md-4">
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


