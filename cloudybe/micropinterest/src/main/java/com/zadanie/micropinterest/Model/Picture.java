package com.zadanie.micropinterest.Model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Picture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String path;
    private int rating;
    private String description;
    private String author;

    public Picture(){}

    public Picture(String name, String path, int rating, String description, String author) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.rating = rating;
        this.description = description;
        this.author = author;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString(){
        return "Picture{" +
                "id=" + id + '\''
                + ", name=" + name + '\''
                + ", path=" + path + '\''
                + ", rating=" + rating + '\''
                + ", description=" + description + '\''
                + ", author=" + author + '\'' +
                "}";
    }
}