let showproject = document.getElementById('showproject');

$.getJSON('https://raw.githubusercontent.com/ALPHA-DEV-MYANMAR/MY-BLOG/main/api/project.json',function(pdata,status){
    // Project data
    pdata.forEach(el => {
        showproject.innerHTML += `
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
                                    <button class=" button-62"">
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
});
