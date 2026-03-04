function Button({ text }) {
  return (
    <button className="inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-2 text-sm font-medium hover:bg-accent/90 transition-colors">
      {text}
    </button>
  );
}

export default Button;
