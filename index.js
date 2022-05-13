window.addEventListener("load", function () {
  // declare
  const $ = document.querySelector.bind(document);
  const content = $("#content");
  // slider
  

  // render item
  const contentItems = [
    {
      img: "https://api.ferrari.com/cms/network/medias//resize/6272ad5dd098711129e2a225-ferrari-magazine-2022-296-gts-gate-split-desk?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=960&height=650",
      title: "The official ferrari magazine",
    },
    {
      img: "https://api.ferrari.com/cms/network/medias//resize/626122aef25f8c47c0588e68-ferrari-approved-banner-gate-desk?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=960&height=650",
      title: "Pre-Owned",
    },
    {
      img: "https://api.ferrari.com/cms/network/medias//resize/6231c5fb9293b44f8816345a-ferrari-museo-modena-ferrari-forever-gate-desk?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=960&height=650",
      title: "Ferrari Forever",
    },
    {
      img: "https://api.ferrari.com/cms/network/medias//resize/6272ad35abda0c39c5a0cc7d-ferrari-corse-clienti-2022-portimao-gate-split-desk?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=960&height=650",
      title: "Corse Clienti",
    },
  ];
  contentItems.map((item) => {
    const template = `
      <div class="content__item">
                <img src="${item.img}"
                    alt="" class="content__img">
                <h3 class="content__title">
                    ${item.title}
                </h3>
            </div>
        </div>`;
    content.insertAdjacentHTML("beforeend", template);
  });
});
