const config = {
    content : [ "./src/**/*.{html,js,svelte,ts}" ],

    theme : {
        extend : {},
    },

    plugins : [
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui : {
        themes : [
            "emerald",
            {
                tiplink : {
        
                    primary : "#cce5f2",
          
                    secondary : "#377CFB",
          
                    accent : "#EA5234",
          
                    neutral : "#333C4D",
          
                    "base-100" : "#FFFFFF",
          
                    info : "#007cbf",
          
                    success : "#36D399",
          
                    warning : "#FBBD23",
          
                    error : "#F87272",
                },
            },
        ],
    },
};

module.exports = config;
