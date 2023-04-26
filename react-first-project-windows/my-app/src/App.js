import './App.css';

function App() {
  return (
    <>
      <nav>
        <h1>MOVIE METER</h1>
        <div class="inputs">
          <form class="searchbar">
            <input type="text" placeholder="Search" id="search"></input>
            <input id="submit" type="submit" value="Submit"></input>
          </form>
          <form class="radio-btns">
            <div class="radio-btn">
              <input type="radio" id="title" name="criteria" value="title"></input>
              <label class="radio-label" for="title">Title</label>
            </div>
            <div class="radio-btn">
              <input type="radio" id="keyword" name="criteria" value="keyword"></input>
              <label class="radio-label" for="keyword">Keyword</label>
            </div>
          </form>
        </div>
      </nav>

      <section>

      </section>

      <footer>
        <span>&#169 2023 All rights reserved.</span>
      </footer>

      <script src="./scripts/constants.js"></script>
      <script src="./scripts/homescreen.js"></script>
      <script src="./scripts/titlesearch.js"></script>
      <script src="./scripts/keywordsearch.js"></script>
    </>
  );
}

export default App;
