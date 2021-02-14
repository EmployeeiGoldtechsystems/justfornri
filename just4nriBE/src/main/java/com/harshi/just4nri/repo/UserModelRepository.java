package com.harshi.just4nri.repo;

import com.harshi.just4nri.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserModelRepository extends JpaRepository<UserModel,Integer> {

    List<UserModel> findAll();

    default Optional<UserModel> findById(Integer id) { return null; }


    UserModel save(UserModel userModel);

    void deleteById(Integer id);

}
