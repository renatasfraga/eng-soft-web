package edu.unisinos.bemapi.domains.user.entity;


import edu.unisinos.bemapi.domains.user.enums.CovenantEnum;
import edu.unisinos.bemapi.utils.entity.EntityDefault;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class User extends EntityDefault {

    @Column(unique = true)
    private String document;

    private String fullName;

    @Enumerated(EnumType.STRING)
    private String sex;

    private LocalDate birthDate;

    private String motherName;

    private String issuingBody;

    private LocalDate dateIssue;

    @Enumerated(EnumType.STRING)
    private CovenantEnum covenant;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @Fetch(FetchMode.SUBSELECT)
    @JoinColumn(name = "user_id")
    private Set<Address> addresses;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @Fetch(FetchMode.SUBSELECT)
    @JoinColumn(name = "user_id")
    private Set<BankAccount> bankAccounts;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @Fetch(FetchMode.SUBSELECT)
    @JoinColumn(name = "user_id")
    private Set<Contact> contacts;
}