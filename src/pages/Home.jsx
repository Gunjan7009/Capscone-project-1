import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'; 

export default function Home() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: "",
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        if (!data.name || data.name.trim() === "") {
            errors.name = "Name is required";
        }
        if (!data.username || data.username.trim() === "") {
            errors.username = "Username is required";
        }
        if (!data.email || data.email.trim() === "") {
            errors.email = "Email is required";
        }
        if (!data.mobile || data.mobile.trim() === "") {
            errors.mobile = "Mobile is required";
        }
        if (!data.checkbox) {
            errors.checkbox = "Checkbox is required";
        }

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        } else {
            alert("Form Submitted Successfully");
            localStorage.setItem("user", JSON.stringify(data));
            setData({
                name: "",
                username: "",
                email: "",
                mobile: "",
                checkbox: false,
            });
            navigate("/selection");
        }
    };

    return (
        <div className="container">
            <div className="left-section">
                <h1>Discover new things on <br/>Superapp</h1>
            </div>
            <div className="right-section">
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "25vw",
                       
                    }}
                >
                    <h2 >Super app</h2>
                    <p className="new-account">Create your new account</p>

                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleInput}
                    />
                    <span className="error-text">{errors.name}</span>

                    <input
                        className="input-field"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={data.username}
                        onChange={handleInput}
                    />
                    <span className="error-text">{errors.username}</span>

                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleInput}
                    />
                    <span className="error-text">{errors.email}</span>

                    <input
                        className="input-field"
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={data.mobile}
                        onChange={handleInput}
                    />
                    <span className="error-text">{errors.mobile}</span>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={handleInput}
                        />
                        <label htmlFor="checkbox">
                            Share my registration data with Superapp
                        </label>
                    </div>
                    <span className="error-text">{errors.checkbox}</span>

                    <button type="submit">Sign Up</button>

                    <div className="disclaimer">
                        <p>
                            By clicking on Sign up, you agree to Superapp{" "}
                            <a href="#">Terms and Conditions of Use</a>
                        </p>
                        <p>
                            To learn more about how Superapp collects, uses, shares, and
                            protects your personal data please read Superapp{" "}
                            <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
