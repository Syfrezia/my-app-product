export default function ProductCard() {
  return (
    <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
      <img
        className="p-8 rounded-t-lg"
        src="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg"
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-sky-900">
          Fujifilm, Camera Body Only, Photography
        </h5>
        <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
        <button className="bg-sky-900 text-white hover:bg-sky-600 active:bg-sky-950 active:ring-4 active:outline-none active:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}