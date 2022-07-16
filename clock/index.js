setInterval(() => {
    let d= new Date();
   let hourt=d.getHours();
   let minutet=d.getMinutes();
   let secondt=d.getSeconds();
   let hrotation=hourt*30+minutet/2;
   let mrotation=6*minutet;
   let srotation=6*secondt;
   hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${srotation}deg)`;
},1000);