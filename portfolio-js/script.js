function updateData() {
    const newName = document.getElementById("nama").value;
    const newRole = document.getElementById("role").value;
    const newAvail = document.getElementById("availability").value;
    const newAge = document.getElementById("age").value;
    const newLokasi = document.getElementById("lokasi").value;
    const newExp = document.getElementById("experience").value;
    const newEmail = document.getElementById("email").value;
    
    document.getElementById("name").innerText = newName;
    document.getElementById("roleid").innerText = newRole;
    document.getElementById("availid").innerText = newAvail;
    document.getElementById("usiaid").innerText = newAge;
    document.getElementById("lokasiid").innerText = newLokasi;
    document.getElementById("expid").innerText = newExp;
    document.getElementById("emailid").innerText = newEmail;
    
    document.getElementById("form").style.visibility = "hidden";
    document.documentElement.scrollTop = 0;
    Swal.fire("Data Terupdate");
}

function editData() {
    document.getElementById("form").style.visibility = "visible";
    
}
