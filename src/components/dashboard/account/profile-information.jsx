import React from "react";

const ProfileInformation = () => {
  return (
    <div>
      <h2>Personal Details</h2>

      <section>
        <div>
          <img />
        </div>
        <div>
          <img />
          <button>
            <img />
            Upload Image
          </button>
        </div>
      </section>

      <section>
        <div>
          <label>First Name</label>
          <input />
        </div>
        <div>
          <label>Last Name</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Date Of Birth</label>
          <input />
        </div>
        <div>
          <label>Phone</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Address</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>City</label>
          <input />
        </div>
        <div>
          <label>Country</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Post Code</label>
          <input />
        </div>
        <div>
          <label>Occupation</label>
          <input />
        </div>
      </section>

      <div>
        <button>Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileInformation;
