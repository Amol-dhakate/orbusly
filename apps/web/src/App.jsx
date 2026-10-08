import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="flex min-h-screen flex-col bg-white text-foreground">
				<Header />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/case-studies" element={<CaseStudiesPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:slug" element={<BlogPostPage />} />
						<Route path="/careers" element={<CareersPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
