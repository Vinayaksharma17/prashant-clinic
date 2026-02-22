function toggleMenu(){
       document.getElementById("navLinks").classList.toggle("show");
     }
     function closeMenu(){
       document.getElementById("navLinks").classList.remove("show");
     }
     
     /* Reveal animation on scroll */
     const reveals = document.querySelectorAll(".reveal");
     const observer = new IntersectionObserver((entries)=>{
       entries.forEach(entry=>{
         if(entry.isIntersecting){
           entry.target.classList.add("show");
         }
       });
     },{threshold:0.15});
     
     reveals.forEach(r=>observer.observe(r));
     
     /* Lightbox */
     function openLightbox(src){
       document.getElementById("lightbox").style.display = "flex";
       document.getElementById("lightbox-img").src = src;
     }
     function closeLightbox(){
       document.getElementById("lightbox").style.display = "none";
     }
     
     /* Appointment -> Send WhatsApp */
     function sendWhatsApp(e){
       e.preventDefault();
     
       const name = document.getElementById("name").value.trim();
       const phone = document.getElementById("phone").value.trim();
       const service = document.getElementById("service").value;
       const date = document.getElementById("date").value;
       const msg = document.getElementById("msg").value.trim();
     
       const text =
     `Appointment Request - Prashant Clinic
     Name: ${name}
     Phone: ${phone}
     Service: ${service}
     Preferred Date: ${date}
     Message: ${msg}`;
     
       const url = `https://wa.me/918310091561?text=${encodeURIComponent(text)}`;
       window.open(url, "_blank");
     }