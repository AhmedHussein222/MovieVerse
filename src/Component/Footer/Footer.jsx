import React from 'react'
import { Col } from 'react-bootstrap'

function Footer() {
  return (
        <>
            
<footer className="bg-dark text-light pt-5 pb-4">
    <div className="container text-center text-md-start p-5">
        <div className="row">
            {/* Logo Section */}
            <Col className="col-md-3 mb-4">
                <h4 class="fw-bold fs-2">
                    <span class="text-primary">MovieVerse</span> 
                    
                </h4>
            </Col>

            {/* The Basics */}
            <Col className="">
                <h5 className="fw-bold">THE BASICS</h5>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-light text-decoration-none">About TMDB</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Contact Us</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Support Forums</a></li>
                    <li><a href="#" class="text-light text-decoration-none">API Documentation</a></li>
                    <li><a href="#" class="text-light text-decoration-none">System Status</a></li>
                </ul>
            </Col>

            {/* Get Involved */}
            <Col className="">
                <h5 className="fw-bold">GET INVOLVED</h5>
                <ul className="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Contribution Bible</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Add New Movie</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Add New TV Show</a></li>
                </ul>
            </Col>

            {/* Community */}
            <Col className="">
                <h5 className="fw-bold">COMMUNITY</h5>
                <ul className="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Guidelines</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Discussions</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Leaderboard</a></li>
                </ul>
            </Col>

            <Col className="">
                <h5 className="fw-bold">LEGAL</h5>
                <ul className="list-unstyled">
                    <li><a href="#" class="text-light text-decoration-none">Terms of Use</a></li>
                    <li><a href="#" class="text-light text-decoration-none">API Terms of Use</a></li>
                    <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
                    <li><a href="#" class="text-light text-decoration-none">DMCA Policy</a></li>
                </ul>
            </Col>
        </div>

        
    </div>
</footer>

        </>

)
}

export default Footer