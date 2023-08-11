package com.zadanie.micropinterest.repo;


import com.zadanie.micropinterest.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepo extends JpaRepository<User, Long>, CrudRepository<User, Long>{

}
