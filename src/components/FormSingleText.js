const FormSingleText = ({
  title, placeholder, categories, onAddBook,
}) => (
  <div>
    <h1>{title}</h1>
    <form onSubmit={onAddBook}>
      <input type="text" name="book-title" placeholder={placeholder} id="bookTitle" />
      <div>
        <p>Category</p>
        <select name="Category" id="category">
          {categories.map((category) => (
            <option key={category.toLowerCase()} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default FormSingleText;
