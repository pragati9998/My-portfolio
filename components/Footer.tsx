
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <p className="text-xl mb-2">
                            Contact me:{" "}
                            <a href="mailto:your.email@example.com" className="text-blue-300 hover:text-blue-500 transition-colors">
                                pragatichaudhary23@gmail.com
                            </a>
                        </p>
                        <p className="text-xl mb-2">Follow me:</p>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="https://www.linkedin.com/in/pragati-chaudhary-24749b17a/" className="text-blue-300 hover:text-blue-500 transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/pragati9998" className="text-blue-300 hover:text-blue-500 transition-colors">
                                    GitHub
                                </a>
                            </li>
                            {/* Add more social links as needed */}
                        </ul>
                    </div>

                    {/* Navigation Section */}
                    <div className="mb-6 md:mb-0">
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                            <li>
                                <a href="/" className="text-blue-300 hover:text-blue-500 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-blue-300 hover:text-blue-500 transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="/projects" className="text-blue-300 hover:text-blue-500 transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-blue-300 hover:text-blue-500 transition-colors">Blogs</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-blue-300 hover:text-blue-500 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} [pragati chaudhary]. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
