
CREATE TABLE IF NOT EXISTS gyms (
  id BIGSERIAL PRIMARY KEY,
  company_name VARCHAR(255),
  logo TEXT,
  street_address TEXT,
  city VARCHAR(255),
  state VARCHAR(12),
  zip_code INTEGER,
  country VARCHAR(255)
 );




