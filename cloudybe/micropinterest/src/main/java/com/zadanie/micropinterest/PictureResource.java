package com.zadanie.micropinterest;

import com.zadanie.micropinterest.Model.Picture;
import com.zadanie.micropinterest.service.PictureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Picture")
public class PictureResource {
    private final PictureService pictureService;

    public PictureResource(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Picture>> getAllPictures(){
        List<Picture> pictures = pictureService.findAllPictures();
        return new ResponseEntity<>(pictures, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<Picture> addPicture(@RequestBody Picture picture){
        Picture picture1 = pictureService.addPicture(picture);
        return new ResponseEntity<>(picture1, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/delete")
    public ResponseEntity<Picture> deletePicture(@RequestBody long id){
        pictureService.deletePictureById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
