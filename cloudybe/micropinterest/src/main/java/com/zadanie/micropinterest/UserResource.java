package com.zadanie.micropinterest;

import com.zadanie.micropinterest.Model.Picture;
import com.zadanie.micropinterest.Model.User;
import com.zadanie.micropinterest.service.PictureService;
import com.zadanie.micropinterest.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Users")
public class UserResource {
    private final UsersService usersService;
    private User currentUser;

    public UserResource(UsersService usersService) {
        this.usersService = usersService;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = usersService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/getCurrentUser")
    public ResponseEntity<User> getCurrentUser(){
        return new ResponseEntity<>(currentUser, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/logout")
    public ResponseEntity<User> logout(){
        currentUser = null;
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestParam String username, @RequestParam String password){
        List<User> users = usersService.findAllUsers();
        for(User user: users){
            if(user.getPassword().equals(password) && user.getUsername().equals(username)){
                currentUser = user;
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<User> addUser(@RequestBody User user){
        List<User> users = usersService.findAllUsers();
        boolean found = users.stream()
                .anyMatch(p -> p.getUsername().equals(user.getUsername()));
        boolean foundMail = users.stream()
                .anyMatch(p -> p.getEmail().equals(user.getEmail()));
        if(found == true || foundMail == true){
            return new ResponseEntity<>(HttpStatus.IM_USED);
        }
        User user1 = usersService.addUser(user);
        return new ResponseEntity<>(user1, HttpStatus.CREATED);
    }

}
