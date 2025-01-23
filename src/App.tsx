import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/landingPage/Header';
import Hero from './components/landingPage/Hero';
import Footer from './components/landingPage/Footer';
import WhyChoose from './components/landingPage/WhyChoose';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import File from './components/fileCompressor/File';
import Image from './components/imageOptimizer/Image';
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        {/* Landing Page */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <WhyChoose />
                                </>
                            }
                        />
                        {/* Sign In Page */}
                        <Route path="/signin" element={<SignIn />} />
                        {/* Sign Up Page */}
                        <Route path="/signup" element={<SignUp />} />

                        <Route path="/compressfile" element={<File />} />
                        <Route path="/optimizeimage" element={<Image />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
        </Provider>
    );
};

export default App;
