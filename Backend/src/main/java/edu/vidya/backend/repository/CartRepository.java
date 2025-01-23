package edu.vidya.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.vidya.backend.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}
