function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,   //   jena par trigger thase page par te
        start:`2% top`,                // kya thi start karvanu che
        end:`bottom top`,     // kya end karvanu che.
        scroller:`#main`,   // add scroller to main.
        markers:true,   //  it shows marking on the website.
    },

    onStart:()=>{       // mouse effect.
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
  scrollTrigger:{
      trigger:`#page`,  
      start:`top top`,             
      end:`bottom top`,     
      scroller:`#main`,
      pin:true,        // " PIN "" atle aa page --> page nu end jyare sudhi ena start pase nahi aave tya sudhi , ene pinned(fixed) rakho , and pavhi move to next page. 
       
  }

})

gsap.to("#page-bottom",{
  scrollTrigger:{               // Su aavse or kyathi mare page-bottom par scroll karvanu chalu karvanu che.
      trigger:`#page-bottom`,  
      start:`5% top`,             
      end:`bottom top`,     
      scroller:`#main`,
       
  },

})


var t1 = gsap.timeline({   // timeline because ek j div na 2 element par aapde property lagavani che jene work ek saathe karavani che.

scrollTrigger:{
  trigger:`#page1`,  
  start:`top top`, 
  scrub:2,     // Inner things ko us current page se relative rakhne k liye hum Scrub use karte hai.  // scrub use karsu toh ena andar nu content page1 par ej rahse and ena thi bahar nai jase and ena badhu relative maj move thase
  scroller:`#main`,
  pin:true,
  markers:true,

}

})

t1.to("#page1 > h1",
{ 
  top:"-50%"
})


var t2 = gsap.timeline({
  
scrollTrigger:
{
 trigger: "#page2",
start:"top top",
scrub:2,
scroller:"#main",
pin:true,    // yeh mera woh current page ko fix rakhega for that animation period.
markers:true,
}

})


t2.to("#page2 > h1",
{ 
  top:"-50%"
})



var t3 = gsap.timeline({
  
  scrollTrigger:
  {
   trigger: "#page4",
  start:"top top",

  scrub:2,
  scroller:"#main",
  pin:true,    // yeh mera woh current page ko fix rakhega .
  markers:true,
  }
  
  })

  t3.to("#page4 > h1",
{ 
  top:"-15%"
})
  

var t4 = gsap.timeline({
  
  scrollTrigger:
  {

  trigger: "#page6",
  start:"top top",
  scrub:2,
  scroller:"#main",
  pin:true,   
  markers:true,
  }
  
  })

  t4.to("#page6text",
{ 
  top:"-25%"
})

var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page8",
    start: "top top",
    scrub: 2,
    scroller: "#main",
    pin: true,   
    markers: true,
  }
});

t5.to("#page8text > #front, #page8text > #head, #page8text > #sound", { 
  x: 100, // Move all elements to the right by 100 pixels
  duration: 2,
  delay: 1,
});

t5.to("#page8text > #light, #page8text > #power", { 
  x: -100, // Move all elements to the left by 100 pixels
 
});



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})








