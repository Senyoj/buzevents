const NextPrevBtns = ({ next, previous }: any) => (
  <div className="absolute top-0 right-5 flex space-x-2">
    <button
      onClick={previous}
      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      Prev
    </button>
    <button
      onClick={next}
      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      Next
    </button>
  </div>
);

export default NextPrevBtns;
