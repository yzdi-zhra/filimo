let bestOf__info = () => {
  type infoSeries = {
    id: string;
    title: string;
    director: string;
    geners: [{ gener: string }];
    text: string;
    logo: string;
    episodes: [{ img: string; title: string }];
    bg: string;
  };
  type episodes = { img: string; title: string };
  type geners = {
    gener: string;
  };
  let serieWrapper = document.querySelector("#bof__series-top-Wrapper");
  let episodesWrapper = document.querySelector("#swiper-wrapper");
  let fetchSeriesInfo = async (x: string) => {
    try {
      let data = await fetch(
        "https://yzdi-zhra.github.io/filimoProject/db.json"
      );
      let res = await data.json();
      res.seriesInfo.map((item: infoSeries) => {
        if (item.id === x) {
          serieWrapper?.insertAdjacentHTML(
            "afterbegin",
            `
                  <div class="bof__series-top-rightWrapper">
                  <div class="bof__series-top__title">${item.title}</div>
                  <div class="bof__series-top__director">${item.director}</div>
                  <div class="bof__series-top__genersWrapper">
                  ${item.geners.map((gener: geners) => {
                    `  <div class="bof__series-top__gener">${gener.gener}</div>`;
                  })}
                  </div>
                  <div class="bof__series-top__text">${item.text}</div>
                  </div>
                  <div class="bof__series-top-leftWrapper">
                      <div class="bof__series-top-left__logo">
                          <img src="${item.logo}" class="bof__series__logo" />
                      </div>
                  </div>
      
                  `
          );
        } else if (item.id === x) {
          serieWrapper?.insertAdjacentHTML(
            "afterbegin",
            `
                <div class="bof__series-top-rightWrapper">
                <div class="bof__series-top__title">${item.title}</div>
                <div class="bof__series-top__director">${item.director}</div>
                <div class="bof__series-top__genersWrapper">
                ${item.geners.map((gener: geners) => {
                  `  <div class="bof__series-top__gener">${gener.gener}</div>`;
                })}
                </div>
                <div class="bof__series-top__text">${item.text}</div>
                </div>
                <div class="bof__series-top-leftWrapper">
                    <div class="bof__series-top-left__logo">
                        <img src="${item.logo}" class="bof__series__logo" />
                    </div>
                </div>
    
                `
          );
        }
      });
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  let fetchSeriesEpisodes = async (x: string) => {
    try {
      let data = await fetch(
        "https://yzdi-zhra.github.io/filimoProject/db.json"
      );
      let res = await data.json();
      res.seriesInfo.map((item: infoSeries) => {
        if (item.id === x) {
          item.episodes.map((episode: episodes) => {
            episodesWrapper?.insertAdjacentHTML(
              "afterbegin",
              `
                      <div class="swiper-slide flex flex-col">
                      <img class="rounded-[10px]" src="${episode.img}" />
                          <span
                          class="text-white text-[14px] w-[100%] flex flex-row items-center justify-start pr-[5px]"
                          >
                      ${episode.title}</span>
                      </div>
                      `
            );
          });
        } else if (item.id === x) {
          item.episodes.map((episode: episodes) => {
            episodesWrapper?.insertAdjacentHTML(
              "afterbegin",
              `
                    <div class="swiper-slide flex flex-col">
                    <img class="rounded-[10px]" src="${episode.img}" />
                        <span
                        class="text-white text-[14px] w-[100%] flex flex-row items-center justify-start pr-[5px]"
                        >
                    ${episode.title}</span>
                    </div>
                    `
            );
          });
        }
      });
    } catch (error) {
      console.log((error as Error).message);
    }
  };


  let mortalWound = document.querySelector("#img5");
  mortalWound?.addEventListener("click", () => {
    fetchSeriesInfo("2");
    fetchSeriesEpisodes("2");
  });
};
export default bestOf__info;
