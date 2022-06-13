//Truy cập
const coursesListEl = document.querySelector(".course-list");

//Hiển thị dnah sách khóa học
const renderCourses = arr => {
    coursesListEl.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        html += `<div class="col-md-4">
        <a href="../html/detail.html?id=${c.id}">
            <div class="course-item shadow-sm rounded mb-4">
                <div class="course-item-image">
                    <img src="${c.image}"
                        alt="khoa hoc" />
                </div>
                <div class="course-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">
                        Spring Boot - Web Back End
                    </h2>
                    <div
                        class="d-flex justify-content-between align-items-center fw-light text-black-50">
                        <p class="type">Trực tuyến</p>
                        <p class="rating">
                            5
                            <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>`

    }
}