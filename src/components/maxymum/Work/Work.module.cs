.workSection {
  position: relative;
  width: 100%;
  background: #f5f4f0;
  color: #211c60;
  overflow: hidden;
}

/* =========================================================
   SHARED
========================================================= */

.workContainer {
  width: min(1240px, calc(100% - 80px));
  margin: 0 auto;
  padding: 150px 0 130px;
}

.sectionHeader {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 70px;
}

.sectionEyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #7b74b8;
}

.sectionTitle {
  margin: 0;
  font-size: clamp(48px, 5.5vw, 76px);
  line-height: 0.94;
  letter-spacing: -4px;
  font-weight: 800;
}

.sectionLink {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(33, 28, 96, 0.3);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #211c60;
  transition:
    gap 0.25s ease,
    border-color 0.25s ease;
}

.sectionLink span {
  font-size: 15px;
}

.sectionLink:hover {
  gap: 18px;
  border-color: #f7c900;
}

/* =========================================================
   SELECTED WORK
========================================================= */

.workGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.workCard {
  min-width: 0;
}

.workVisual {
  position: relative;
  width: 100%;
  aspect-ratio: 0.78;
  overflow: hidden;
  border-radius: 22px;
  background:
    radial-gradient(
      circle at 30% 25%,
      rgba(117, 110, 218, 0.7),
      transparent 35%
    ),
    linear-gradient(
      145deg,
      #29246f 0%,
      #373184 48%,
      #171447 100%
    );
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease;
}

.workCard:hover .workVisual {
  transform: translateY(-8px);
  box-shadow:
    0 28px 55px rgba(23, 20, 71, 0.2);
}

.visualPattern {
  position: absolute;
  inset: -30%;
  opacity: 0.25;
  background-image:
    linear-gradient(
      45deg,
      transparent 46%,
      rgba(255, 255, 255, 0.35) 47%,
      rgba(255, 255, 255, 0.35) 49%,
      transparent 50%
    ),
    linear-gradient(
      -45deg,
      transparent 46%,
      rgba(255, 255, 255, 0.18) 47%,
      rgba(255, 255, 255, 0.18) 49%,
      transparent 50%
    );
  background-size: 90px 90px;
  transform: rotate(12deg);
}

.workNumber {
  position: absolute;
  top: 22px;
  left: 22px;
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
}

.workArrow {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f7c900;
  color: #211c60;
  font-size: 18px;
  font-weight: 700;
}

.workInfo {
  padding: 24px 5px 0;
}

.workClient {
  display: block;
  margin-bottom: 9px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #7b74b8;
}

.workInfo h3 {
  margin: 0;
  font-size: 21px;
  line-height: 1.1;
  letter-spacing: -0.7px;
  font-weight: 800;
}

.workInfo p {
  margin: 14px 0 20px;
  font-size: 11px;
  line-height: 1.6;
  color: rgba(33, 28, 96, 0.62);
}

.viewProject {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.viewProject span {
  font-size: 13px;
  transition: transform 0.25s ease;
}

.workCard:hover .viewProject span {
  transform: translateX(5px);
}

/* =========================================================
   THINK MAKE MOVE
========================================================= */

.capabilitiesSection {
  position: relative;
  padding: 145px 0 150px;
  background:
    radial-gradient(
      circle at 78% 20%,
      rgba(81, 72, 170, 0.35),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #171447 0%,
      #29246f 48%,
      #211c60 100%
    );
  color: white;
}

.capabilitiesSection::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.09;
  background-image:
    linear-gradient(
      45deg,
      transparent 48%,
      rgba(255, 255, 255, 0.45) 49%,
      rgba(255, 255, 255, 0.45) 51%,
      transparent 52%
    );
  background-size: 180px 180px;
}

.capabilitiesIntro,
.capabilityGrid {
  position: relative;
  z-index: 2;
  width: min(1240px, calc(100% - 80px));
  margin: 0 auto;
}

.capabilitiesIntro {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 100px;
  align-items: end;
  margin-bottom: 75px;
}

.capabilitiesTitle {
  margin: 0;
  font-size: clamp(72px, 8vw, 120px);
  line-height: 0.79;
  letter-spacing: -7px;
  font-weight: 800;
}

.capabilitiesTitle::first-line {
  color: white;
}

.capabilitiesStatement {
  padding-bottom: 8px;
}

.statementLead {
  max-width: 510px;
  margin: 0 0 25px;
  font-size: 19px;
  line-height: 1.45;
  letter-spacing: -0.4px;
  color: rgba(255, 255, 255, 0.9);
}

.statementSmall {
  max-width: 440px;
  margin: 0;
  font-size: 11px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.48);
}

.capabilityGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.18);
}

.capabilityCard {
  position: relative;
  min-height: 530px;
  padding: 34px;
  background: rgba(23, 20, 71, 0.72);
  backdrop-filter: blur(8px);
  transition:
    background 0.35s ease,
    transform 0.35s ease;
}

.capabilityCard:hover {
  background: rgba(55, 49, 132, 0.9);
  transform: translateY(-6px);
}

.capabilityTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
}

.capabilityNumber {
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.42);
}

.capabilitySymbol {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(247, 201, 0, 0.5);
  border-radius: 50%;
  color: #f7c900;
  font-size: 22px;
}

.capabilityLabel {
  display: block;
  margin-bottom: 14px;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f7c900;
}

.capabilityTitle {
  margin: 0 0 22px;
  font-size: 48px;
  line-height: 0.95;
  letter-spacing: -2px;
  font-weight: 800;
}

.capabilityDescription {
  max-width: 320px;
  margin: 0 0 30px;
  font-size: 12px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}

.capabilityItems {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  max-width: 360px;
}

.capabilityItems span {
  padding: 7px 9px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 8px;
  color: rgba(255, 255, 255, 0.56);
}

.capabilityLink {
  position: absolute;
  left: 34px;
  bottom: 34px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.4px;
  color: white;
}

.capabilityLink span {
  color: #f7c900;
  font-size: 15px;
  transition: transform 0.25s ease;
}

.capabilityLink:hover span {
  transform: translateX(6px);
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {
  .workGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px 18px;
  }

  .capabilitiesIntro {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .capabilityGrid {
    grid-template-columns: 1fr;
  }

  .capabilityCard {
    min-height: 470px;
  }
}

@media (max-width: 800px) {
  .workContainer {
    width: calc(100% - 40px);
    padding: 100px 0;
  }

  .sectionHeader {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 45px;
  }

  .sectionTitle {
    font-size: 48px;
    letter-spacing: -3px;
  }

  .workGrid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .workVisual {
    aspect-ratio: 0.9;
  }

  .capabilitiesSection {
    padding: 100px 0;
  }

  .capabilitiesIntro,
  .capabilityGrid {
    width: calc(100% - 40px);
  }

  .capabilitiesTitle {
    font-size: 76px;
    letter-spacing: -5px;
  }

  .statementLead {
    font-size: 17px;
  }
}

@media (max-width: 500px) {
  .sectionTitle {
    font-size: 42px;
  }

  .capabilitiesTitle {
    font-size: 62px;
    letter-spacing: -4px;
  }

  .capabilityCard {
    min-height: 500px;
    padding: 25px;
  }

  .capabilityTitle {
    font-size: 42px;
  }

  .capabilityLink {
    left: 25px;
    bottom: 25px;
  }
}