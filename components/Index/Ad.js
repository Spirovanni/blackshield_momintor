import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Player } from 'video-react';

const Ad = () => {
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, []);
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="video-area">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<img
								src="/images/video-img2.jpg"
								className="shadow"
								alt="image"
							/>
						</div>
						<Link href="#">
							<a
								onClick={(e) => {
									e.preventDefault();
									openModal();
								}}
								className="video-btn popup-youtube"
							>
								<i className="flaticon-play"></i>
							</a>
						</Link>
					</div>
				</div>
			</div>
			{display ? (
				<Player
					playsInline
					poster="/images/video-img2.jpg"
					src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
				/>
			) : (
				""
			)}
		</>
	);
};

export default Ad;
