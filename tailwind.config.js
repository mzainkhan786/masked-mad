/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      katabg:"url('./images/kata/katabg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))"
    },
    fontFamily:{
      popins:"'Poppins', sans-serif",
    },

    colors:{
      frozi:"#F6F9FE;",
      blue:"#5E72E4;",
      grey:"#9CA1AB;",
      pblue:"#11CDEF;",
     lblue:"#E7FAFD;",
     lgrey:"#E6E7EA;",
     gblue:"#5E72E4;",
    dfrozi:"#11CDEF;"


   
    },
 
  },
  plugins: [],
}
}
