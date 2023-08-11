package com.zadanie.micropinterest.service;

import com.zadanie.micropinterest.Model.Picture;
import com.zadanie.micropinterest.Model.User;
import com.zadanie.micropinterest.repo.PictureRepo;
import com.zadanie.micropinterest.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsersService {
    private final UsersRepo usersRepo;

    @Autowired
    public UsersService(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;
    }

    public User addUser(User user){
        return usersRepo.save(user);
    }

    public List<User> findAllUsers(){
        return usersRepo.findAll();
    }
}
