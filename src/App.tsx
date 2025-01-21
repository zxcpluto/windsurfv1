import './App.css'

function App() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <img 
          src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3"
          alt="Corned Beef Hash with Coffee"
          className="hero-image"
        />
        <div className="header-content">
          <h1 className="blog-title">The Perfect Morning Ritual:<br />Corned Beef Hash & Coffee</h1>
          <p className="blog-subtitle">A culinary journey through comfort and tradition</p>
        </div>
        <div className="scroll-indicator">↓</div>
      </header>

      <main className="blog-content">
        <section className="content-section">
          <h2 className="section-title">A Morning Symphony</h2>
          <p className="section-text">
            There's something magical about the way the morning light filters through steam rising from a fresh cup of coffee,
            as the rich aroma of perfectly crisped corned beef hash fills the kitchen. This isn't just breakfast;
            it's a morning ritual that transforms the ordinary into the extraordinary.
          </p>
        </section>

        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1529564269951-ab1c08249552?ixlib=rb-4.0.3"
            alt="Coffee Preparation"
            className="content-image"
          />
        </div>

        <section className="content-section">
          <h2 className="section-title">The Perfect Pairing</h2>
          <p className="section-text">
            The robust earthiness of freshly ground coffee beans complements the savory depth of corned beef hash
            in ways that seem almost orchestrated. Each bite of crispy potatoes and tender beef, followed by a sip
            of smooth, dark coffee, creates a harmony of flavors that dance on your palate.
          </p>
        </section>

        <blockquote className="quote">
          "The morning cup of coffee has an exhilaration about it which the cheering influence of the afternoon or evening cup of tea cannot be expected to reproduce."
        </blockquote>

        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3"
            alt="Corned Beef Hash"
            className="content-image"
          />
        </div>

        <section className="content-section">
          <h2 className="section-title">The Art of Preparation</h2>
          <p className="section-text">
            The key to exceptional corned beef hash lies in the perfect balance of textures: crispy edges, tender
            centers, and that golden-brown crust that forms when patience meets proper heat. Paired with a pour-over
            coffee made with precision and care, it becomes an experience worth waking up for.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
