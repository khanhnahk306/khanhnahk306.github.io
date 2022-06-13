let params = new URLSearchParams(window.location.search);
let id = params.get("id");
console.log(id);


const supporterInfo = document.querySelector(".supporter-info");
supporterInfo.innerHTML =
    `<p>
        <b>Tư vấn viên :</b>
        ${supporters.name}
    </p>
    <p>
        <b>Email :</b>
        ${supporters.email}
    </p>
    <p>
        <b>Số điện thoại :</b>
        ${supporter.phone}
    </p>
    <p>
        <button class="btn btn-primary shadow-sm">Nhận tư vấn</button>
    </p>`;


const courseDescriptionDiv = document.querySelector('.course-description');
courseDescriptionDiv.innerHTML = `<p>${course.content}</p>`;