import {
    useContract,
    useValidDirectListings,
    useValidEnglishAuctions,
  } from "@thirdweb-dev/react";
  import { useRouter } from "next/router";
  import React, { useState } from "react";
  import Container from "../../components/Container/Container";
  import ListingWrapper from "../../components/ListingWrapper/ListingWrapper";
  import NFTGrid from "../../components/NFT/NFTGrid";
  import Skeleton from "../../components/Skeleton/Skeleton";
  import {
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS,
  } from "../../const/contractAddresses";
  import styles from "../../styles/Profile.module.css";
import { NextPage } from "next";
  
  
  const Auction: NextPage = () => {
    const router = useRouter();
    const [tab, setTab] = useState<"auctions">("auctions");

  
    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  
    const { contract: marketplace } = useContract(
        MARKETPLACE_ADDRESS,
      "marketplace-v3"
    );
  
  
    const { data: auctionListings, isLoading: loadingAuctions } =
      useValidEnglishAuctions(marketplace, {
        seller: router.query.address as string,
      });
  
    return (
      <Container maxWidth="lg">
        <div className={styles.profileHeader}>
          <h1 className={styles.profileName}>
            {router.query.address ? (
              router.query.address.toString().substring(0, 4) +
              "..." +
              router.query.address.toString().substring(38, 42)
            ) : (
              <Skeleton width="320" />
            )}
          </h1>
        </div>
  
        <div className={styles.tabs}>
          <h3
            className={`${styles.tab}
          ${tab === "auctions" ? styles.activeTab : ""}`}
            onClick={() => setTab("auctions")}
          >
            Click for Auctions
          </h3>
        </div>

        <div
          className={`${
            tab === "auctions" ? styles.activeTabContent : styles.tabContent
          }`}
        >
          {loadingAuctions ? (
            <p>Loading...</p>
          ) : auctionListings && auctionListings.length === 0 ? (
            <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
          ) : (
            auctionListings?.map((listing) => (
              <ListingWrapper listing={listing} key={listing.id} />
            ))
          )}
        </div>
      </Container>
    );
  }
  export default Auction;