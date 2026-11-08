    const form = document.getElementById("form");
    const tabel = document.querySelector("table");
    let nomorUrutan = 1;

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const asal = document.getElementById("asal").value;
        const tujuan = document.getElementById("tujuan").value;
        const catatan = document.getElementById("catatan").value;

        const barisbaru =  document.createElement("tr");
        const nomor = document.createElement("td");
        const datanama = document.createElement("td");
        const dataasal = document.createElement("td");
        const datatujuan = document.createElement("td");
        const datacatatan = document.createElement("td");

        nomor.textContent = nomorUrutan;
        barisbaru.appendChild(nomor)

        datanama.textContent = nama;
        barisbaru.appendChild(datanama);

        dataasal.textContent = asal;
        barisbaru.appendChild(dataasal);

        datatujuan.textContent = tujuan;
        barisbaru.appendChild(datatujuan);

        datacatatan.textContent = catatan;
        barisbaru.appendChild(datacatatan);

        table.appendChild(barisbaru);

        nomorUrutan++;
        
        form.reset();

    });


        
            