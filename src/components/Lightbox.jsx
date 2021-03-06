import { useData } from "../contexts/DataContext";

function Lightbox() {
  const { setIsLightboxOpen, productImgNum, setProductImgNum } = useData();

  return (
    <div className='lightbox'>
      <div className='lightbox__body'>
        <button
          onClick={() => {
            setIsLightboxOpen(false);
            document.body.style.overflow = "revert";
          }}
          className='lightbox__btn-close'
        >
          <img src='/icons/icon-close.svg' alt='icon' />
        </button>

        <div className='lightbox__img-group'>
          <div className='lightbox__main'>
            <img
              className='lightbox__main-img'
              src={`/images/image-product-${productImgNum}.jpg`}
              alt='image'
            />

            <button
              onClick={() => {
                if (productImgNum > 1) {
                  setProductImgNum(state => (state -= 1));
                } else {
                  setProductImgNum(4);
                }
              }}
              className='btn lightbox__btn-prev'
            >
              <img src='/icons/icon-previous.svg' />
            </button>

            <button
              onClick={() => {
                if (productImgNum < 4) {
                  setProductImgNum(state => (state += 1));
                } else {
                  setProductImgNum(1);
                }
              }}
              className='btn lightbox__btn-next'
            >
              <img src='/icons/icon-next.svg' />
            </button>
          </div>

          <div className='lightbox__thumbnail'>
            {[1, 2, 3, 4].map((n, i) => (
              <div
                key={i}
                className={`lightbox__thumbnail-img ${
                  i === productImgNum - 1 && "active"
                }`}
                onClick={() => setProductImgNum(n)}
              >
                <img src={`/images/image-product-${n}.jpg`} alt={n} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
