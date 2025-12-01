package com.example.Mercado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository  extends JpaRepository(ClienteModel, Long ) {
    Optinional<ClientModel> findByEmail(String email);
}

