CREATE TABLE rental_price_info (
    id SERIAL PRIMARY KEY,
    guest_limit INT NOT NULL, 
    service_fee INT NOT NULL,
    taxes DECIMAL NOT NULL,
    rating INT NOT NULL
);

CREATE TABLE rental_availability (
    id SERIAL PRIMARY KEY,
    rental_date VARCHAR NOT NULL,
    price INT NOT NULL,
    available INT NOT NULL,
    views INT NOT NULL,
    rental_id INT REFERENCES rental_price_info(id)
);